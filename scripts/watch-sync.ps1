$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $Root

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This folder is not a Git repository yet. Run scripts/publish-github-pages.ps1 first."
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $Root
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'LastWrite, FileName, Size'
$watcher.EnableRaisingEvents = $true

$lastRun = Get-Date "2000-01-01"
$syncScript = Join-Path $Root "scripts\sync.ps1"
$action = {
  $path = $Event.SourceEventArgs.FullPath
  if ($path -match "\\.git\\" -or $path -match "\\node_modules\\" -or $path -match "\\.vercel\\" -or $path -match "\\.netlify\\") {
    return
  }
  if ($path -notmatch "\\.(html|css|js|md|ps1)$") {
    return
  }
  $now = Get-Date
  if (($now - $script:lastRun).TotalSeconds -lt 4) {
    return
  }
  $script:lastRun = $now
  Start-Sleep -Seconds 2
  try {
    & $Event.MessageData
  } catch {
    Write-Host "Sync failed: $($_.Exception.Message)"
  }
}

Register-ObjectEvent $watcher Changed -MessageData $syncScript -Action $action | Out-Null
Register-ObjectEvent $watcher Created -MessageData $syncScript -Action $action | Out-Null
Register-ObjectEvent $watcher Renamed -MessageData $syncScript -Action $action | Out-Null

Write-Host "Watching site files. Keep this window open; press Ctrl+C to stop."
while ($true) {
  Start-Sleep -Seconds 1
}
