"""Serve the generated site on an explicitly selected local interface."""
import argparse
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--bind', default='127.0.0.1')
parser.add_argument('--port', type=int, default=4178)
args = parser.parse_args()
directory = Path(__file__).resolve().parent.parent / 'dist'
handler = functools.partial(SimpleHTTPRequestHandler, directory=str(directory))
server = ThreadingHTTPServer((args.bind, args.port), handler)
print(f'Bitty preview: http://{args.bind}:{args.port}', flush=True)
server.serve_forever()
