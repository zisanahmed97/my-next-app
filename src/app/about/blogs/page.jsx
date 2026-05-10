import Link from "next/link";

const blogPage = () => {

    const blogs = [
  {
    id: 1,
    title: "Introduction to Web Development",
    author: "Ahmed Zisan",
    category: "Programming",
    views: 1200,
    content: "Web development involves creating websites and web applications using HTML, CSS, and JavaScript."
  },
  {
    id: 2,
    title: "Benefits of Digital Marketing",
    author: "Sarah Khan",
    category: "Marketing",
    views: 980,
    content: "Digital marketing helps businesses reach targeted audiences through online platforms and social media."
  },
  {
    id: 3,
    title: "Learning Data Structures in C",
    author: "John Doe",
    category: "Education",
    views: 750,
    content: "Data structures like arrays, linked lists, stacks, and queues are important for efficient programming."
  },
  {
    id: 4,
    title: "Top 5 JavaScript Tips",
    author: "Emily Smith",
    category: "JavaScript",
    views: 1500,
    content: "Using modern JavaScript features like arrow functions and destructuring can improve code quality."
  }
];


    return (
        <div>
            <h2>Blogs:</h2>
            {
                blogs.map(blog => <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <Link href="/">show details</Link>
                </div>)
            }
        </div>
    );
};

export default blogPage;