$ErrorActionPreference = "SilentlyContinue"
$body = '{"email":"admin@epl-lumieres.local","password":"admin123","name":"Admin System"}'
try {
    $r = Invoke-WebRequest -Uri "https://epl-les-lumieres.vercel.app/api/auth/sign-up/email" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing -TimeoutSec 30
    "SIGNUP: " + $r.StatusCode + " " + $r.Content
} catch {
    "SIGNUP ERR: " + $_.Exception.Message
    if ($_.Exception.Response) {
        $sr = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        "BODY: " + $sr.ReadToEnd()
    }
}
