$ErrorActionPreference = "SilentlyContinue"
$body = '{"email":"test5@test.com","password":"test1234","name":"Test5"}'
try {
    $r = Invoke-WebRequest -Uri "https://epl-les-lumieres.vercel.app/api/auth/sign-up/email" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing -TimeoutSec 30
    "OK: " + $r.StatusCode + " " + $r.Content
} catch {
    "ERR: " + $_.Exception.Message
    if ($_.Exception.Response) {
        $sr = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        "BODY: " + $sr.ReadToEnd()
    }
}
