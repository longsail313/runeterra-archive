param(
  [Parameter(Mandatory = $true)]
  [string]$RemoteUrl
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $Root

if (-not (Test-Path -LiteralPath "index.html")) {
  throw "index.html was not found in $Root"
}

if (-not (Test-Path -LiteralPath ".git")) {
  git init
}

if (-not (git config user.name)) {
  git config user.name "Codex Publisher"
}

if (-not (git config user.email)) {
  git config user.email "codex-publisher@example.local"
}

$branch = (git branch --show-current)
if (-not $branch) {
  git checkout -b main
} elseif ($branch -ne "main") {
  git branch -M main
}

$remotes = git remote
if ($remotes -contains "origin") {
  git remote set-url origin $RemoteUrl
} else {
  git remote add origin $RemoteUrl
}

git add index.html README.md .gitignore .nojekyll scripts
$hasChanges = git status --porcelain
if ($hasChanges) {
  git commit -m "Publish Runeterra archive site"
}

git push -u origin main

Write-Host ""
Write-Host "Published source files to GitHub."
Write-Host "Now enable GitHub Pages: Settings -> Pages -> Deploy from a branch -> main / root."
