import { blogPosts } from '../blog-posts.json';

const humanReadableUrl = (url: string) =>
  url.replace(/[^\w]/g, '-').replace(/-+/g, '-');

const actualPath = (markdownPath: string) => {
  return `/assets/${markdownPath}`;
};

export function get_all_blog_posts() {
  return blogPosts.map((b) => ({
    ...b,
    perm_link: b.perm_link ? b.perm_link : humanReadableUrl(b.title),
    remote_path: actualPath(b.remote_path),
  }));
}

export function find_blog_post_by_url(url: string) {
  const post = get_all_blog_posts().find(b => b.perm_link === url);
  if (post) {
    return post;
  }

  return get_all_blog_posts().find(b => humanReadableUrl(b.title) === url);
}
