# DELTARUNE Fight Simulator

A fan-made simulator for practicing DELTARUNE and UNDERTALE battles. Play through a catalog of 365 encounters and bonus games, with practice tools and rewind support. Runs offline on **Windows and macOS**.

## Download

Get the latest version from **[Releases](https://github.com/SakuuGamerYTB/deltarunesim/releases/latest)**. The standalone apps run offline in their own window.

| Platform | Standalone download | How to launch |
| --- | --- | --- |
| Windows 64-bit | `Windows-Standalone.exe` | Open the EXE. No installation required. |
| macOS, Apple Silicon | `macOS-arm64-Standalone.dmg` | Open the DMG, drag the app into Applications, then open it. |
| macOS, Intel | `macOS-x64-Standalone.dmg` | Open the DMG, drag the app into Applications, then open it. |

On Windows, the first launch may take a little time while bundled files are unpacked. Press **F11** for fullscreen, or use **View > Toggle Full Screen** on macOS. Progress is saved by the app, separately from browser saves.

The apps are not signed with a verified publisher certificate or notarized by Apple. Your operating system may show a warning. On macOS, if you trust this download, use **System Settings > Privacy & Security > Open Anyway** after trying to open the app.

## Browser version

The older ZIP downloads run in your web browser:

| Platform | Download | Launch after extracting |
| --- | --- | --- |
| Windows 64-bit | `windows-x64.zip` | `DeltaruneSim.exe` |
| macOS, Apple Silicon | `macos-arm64.zip` | `Launch.command` |
| macOS, Intel | `macos-x64.zip` | `Launch.command` |

1. Download the archive for your computer.
2. Extract the **entire folder**.
3. Open the launcher listed above.
4. Play in the browser window that opens at **http://127.0.0.1:8766/**.

Keep the launcher's terminal window open while playing. Press **Ctrl+C** in that window to stop it. No additional software installation is required.

Your progress is saved in your browser. Use the same browser and local address to keep your saves. The game works offline; external links and downloading new beatmaps require Internet.

## Run with Python

If you cloned the repository, use Python 3.9 or newer:

**Windows**

```powershell
py -3 serve.py --readable --port 8766 --open
```

**macOS**

```sh
python3 serve.py --readable --port 8766 --open
```

## Credits

- **puskevi**: [original fight simulator](https://deltarunesim.com/).
- **Toby Fox and the original contributors**: DELTARUNE and UNDERTALE.
- 
All original credits and notices are preserved. Game content and other third-party assets remain the property of their respective owners.
