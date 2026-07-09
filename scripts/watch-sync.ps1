$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $Root

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This folder is not a Git repository yet. Run scripts/publish-github-pages.ps1 first."
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $Root
$watcher.Filter = "index.html"
$watcher.IncludeSubdirectories = $false
$watcher.NotifyFilter = [System.IO.NotifyFilters]'LastWrite, FileName, Size'
$watcher.EnableRaisingEvents = $true

$lastRun = Get-Date "2000-01-01"
$action = {
  $now = Get-Date
  if (($now - $script:lastRun).TotalSeconds -lt 4) {
    return
  }
  $script:lastRun = $now
  Start-Sleep -Seconds 2
  try {
    & "$using:Root\scripts\sync.ps1"
  } catch {
    Write-Host "Sync failed: $($_.Exception.Message)"
  }
}

Register-ObjectEvent $watcher Changed -Action $action | Out-Null
Register-ObjectEvent $watcher Created -Action $action | Out-Null
Register-ObjectEvent $watcher Renamed -Action $action | Out-Null

Write-Host "Watching index.html. Keep this window open; press Ctrl+C to stop."
while ($true) {
  Start-Sleep -Seconds 1
}
