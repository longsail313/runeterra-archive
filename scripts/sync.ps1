$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $Root

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This folder is not a Git repository yet. Run scripts/publish-github-pages.ps1 first."
}

$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0 -or -not $remote) {
  throw "No Git remote is configured. Run scripts/publish-github-pages.ps1 first."
}

git add index.html README.md .gitignore .nojekyll scripts
$hasChanges = git status --porcelain
if (-not $hasChanges) {
  Write-Host "No changes to sync."
  exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update site $timestamp"
git push
git push origin main:gh-pages
Write-Host "Synced to cloud at $timestamp."
