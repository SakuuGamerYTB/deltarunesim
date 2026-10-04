# DELTARUNE Fight Simulator

A fan-made simulator for practicing DELTARUNE and UNDERTALE battles. Play through a catalog of 365 encounters and bonus games, with practice tools and rewind support. Runs offline on **Windows and macOS**.

## Download

Get the latest version from **[Releases](https://github.com/SakuuGamerYTB/deltarunesim/releases/latest)**.

| Platform | Download | Launch after extracting |
| --- | --- | --- |
| Windows 64-bit | `windows-x64.zip` | `DeltaruneSim.exe` |
| macOS, Apple Silicon | `macos-arm64.zip` | `Launch.command` |
| macOS, Intel | `macos-x64.zip` | `Launch.command` |

## How to play

1. Download the archive for your computer.
2. Extract the **entire folder**.
3. Open the launcher listed above.
4. Play in the browser window that opens at **http://127.0.0.1:8766/**.

Keep the launcher's terminal window open while playing. Press **Ctrl+C** in that window to stop it. No additional software installation is required.

Your progress is saved in your browser. Use the same browser and local address to keep your saves. The game works offline; external links and downloading new beatmaps require Internet.

The launchers are unsigned, so your operating system may display a warning or block them according to its security settings.

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
- **SakuuGamerYTB**: offline releases for Windows and macOS.

All original credits and notices are preserved. Game content and other third-party assets remain the property of their respective owners.
