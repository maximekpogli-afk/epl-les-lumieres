$ErrorActionPreference = "SilentlyContinue"
$body = '{"email":"admin@epl-lumieres.local","password":"admin123","name":"Admin System"}'
try {
    $r = Invoke-WebRequest -Uri "http://localhost:3000/api/auth/sign-up/email" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing -TimeoutSec 120
    "SIGNUP: " + $r.StatusCode + " " + $r.Content
} catch {
    "SIGNUP ERR: " + $_.Exception.Message
}
