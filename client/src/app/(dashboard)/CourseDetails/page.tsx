import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen } from "lucide-react";

const CourseDetails = () => {
  // Static course details
  const course = {
    title: "Advanced Web Development",
    description:
      "Master modern web technologies including React, Node.js, and cloud deployment. This comprehensive course covers frontend and backend development, deployment strategies, and best practices for building scalable web applications. You'll learn through hands-on projects and real-world examples.",
    instructor: "Prof. Alex Thompson",
    duration: "12 weeks",
    students: 245,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    syllabus: [
      "Introduction to Modern Web Development",
      "React and Component-Based Architecture",
      "State Management and Data Flow",
      "Backend Development with Node.js",
      "Database Design and Integration",
      "Authentication and Authorization",
      "Cloud Deployment and DevOps",
      "Performance Optimization",
      "Testing and Debugging",
      "Security Best Practices",
    ],
    prerequisites: "Basic knowledge of HTML, CSS, and JavaScript",
    price: "$599",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">
          <span>Home</span> &gt; <span>Courses</span> &gt;{" "}
          <span>{course.title}</span>
        </div>

        {/* Course Details Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <span>{course.instructor}</span>
              </div>
            </div>

            {/* Course Syllabus */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Course Syllabus</h2>
              <ul className="space-y-3">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
              <p className="text-gray-600">{course.prerequisites}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
              <div className="text-3xl font-bold text-primary mb-6">
                {course.price}
              </div>
              <Button className="w-full mb-4">Enroll Now</Button>
              <p className="text-sm text-gray-500 text-center">
                14-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
