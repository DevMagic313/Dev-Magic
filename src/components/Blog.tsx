import { motion } from 'framer-motion';
import { FaClock, FaTags } from 'react-icons/fa';
import blogPostImage1 from '../img/img1.jpg';
import blogPostImage2 from '../img/img2.jpg';
import blogPostImage3 from '../img/img3.jpg';
const blogPosts = [
  {
    title: 'Building a Pomodoro Timer with React',
    excerpt: 'Learn how to create a customizable Pomodoro Timer using React hooks and TypeScript.',
    date: 'Jan 15, 2024',
    tags: ['React', 'TypeScript', 'Tutorial'],
    image: blogPostImage1,
    link: '#'
  },
  {
    title: 'Creating a Chrome Extension',
    excerpt: 'Step-by-step guide to building your first Chrome extension using JavaScript.',
    date: 'Jan 10, 2024',
    tags: ['JavaScript', 'Chrome Extension', 'Guide'],
    image: blogPostImage2,
    link: '#'
  },
  {
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Deep dive into CSS Grid Layout with practical examples and best practices.',
    date: 'Jan 5, 2024',
    tags: ['CSS', 'Web Design', 'Tutorial'],
    image: blogPostImage3,
    link: '#'
  }
];
const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          Blog
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-lg border-2 border-neon-cyan hover:border-neon-magenta transition-colors overflow-hidden"
            >
             <img 
  src={post.image} 
  alt={post.title}
  className="w-full aspect-video object-cover"
/>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neon-cyan mb-4">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaTags />
                    <span>{post.tags[0]}</span>
                  </div>
                </div>
                <motion.a
                  href={post.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-4 py-2 rounded-lg border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-colors text-sm font-poppins"
                >
                  Read More
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
