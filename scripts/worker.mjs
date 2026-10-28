export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.bitty.games' || (url.hostname === 'bitty.games' && url.protocol === 'http:')) {
      url.hostname = 'bitty.games';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
