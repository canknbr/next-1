import { useRouter } from 'next/router';
function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query, slugf);
  return (
    <div>
      <h1>blog post</h1>
    </div>
  );
}
export default BlogPostPage;
