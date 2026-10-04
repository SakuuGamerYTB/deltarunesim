"""Standalone launcher entry point. No system Python required."""
import sys
import serve

if __name__ == '__main__':
    arguments = sys.argv[1:]
    open_browser = '--no-open' not in arguments
    arguments = [value for value in arguments if value != '--no-open']
    sys.argv = [sys.argv[0], '--readable', '--port', '8766', *arguments]
    if open_browser:
        sys.argv.append('--open')
    serve.main()
