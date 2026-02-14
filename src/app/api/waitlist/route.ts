import { createHash } from "crypto";

type Answers = {
  goal?: string;
  experience?: string;
  painPoints?: string[];
  loggingPref?: string;
  dietPrefs?: string[];
  device?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter((item) => item.length > 0);
};

const sha256 = (value: string) =>
  createHash("sha256").update(value).digest("hex");

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return Response.json({ ok: false }, { status: 500 });
  }

  let payload: { email?: string; answers?: Answers } | null = null;
  try {
    payload = (await request.json()) as { email?: string; answers?: Answers };
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const emailRaw = payload?.email ?? "";
  const email = emailRaw.trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const answers = payload?.answers ?? {};
  const painPoints = normalizeStringArray(answers.painPoints);
  if (painPoints.length > 2) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const dietPrefs = normalizeStringArray(answers.dietPrefs);
  const dietPrefsNormalized = dietPrefs.includes("None") ? ["None"] : dietPrefs;

  const answersNormalized: Answers = {
    goal: answers.goal,
    experience: answers.experience,
    painPoints,
    loggingPref: answers.loggingPref,
    dietPrefs: dietPrefsNormalized,
    device: answers.device,
  };

  const headers = request.headers;
  const forwardedFor = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = headers.get("x-real-ip")?.trim();
  const ip = forwardedFor || realIp || "";
  const ipHash = ip ? sha256(ip) : null;
  const userAgent = (headers.get("user-agent") ?? "").slice(0, 200);

  try {
    const restUrl = new URL("/rest/v1/waitlist_signups", supabaseUrl);
    restUrl.searchParams.set("on_conflict", "email");

    const response = await fetch(restUrl, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates",
      },
      body: JSON.stringify({
        email,
        goal: answersNormalized.goal,
        experience: answersNormalized.experience,
        pain_points: answersNormalized.painPoints,
        logging_pref: answersNormalized.loggingPref,
        diet_prefs: answersNormalized.dietPrefs,
        device: answersNormalized.device,
        answers: answersNormalized,
        ip_hash: ipHash,
        user_agent: userAgent,
      }),
    });

    if (response.ok || response.status === 409) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const body = await response.text().catch(() => "");
    console.error("waitlist_insert_failed", {
      status: response.status,
      body,
    });
    return Response.json({ ok: false }, { status: 500 });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
