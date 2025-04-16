import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setlikedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  // Effect to update allCourses when courses prop changes
  useEffect(() => {
    const getCourses = () => {
      if (category === 'All') {
        let allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            allCourses.push(course);
          });
        });
        setAllCourses(allCourses);
      } else {
        // Handle the case where the category is not 'All'
        if (courses[category]) {
          setAllCourses(courses[category]);
        } else {
          setAllCourses([]); // If category is not found in courses, set it to an empty array
        }
      }
    };

    if (courses) {
      getCourses(); // Call getCourses only if courses is available
    }
  }, [courses, category]); // Re-run the effect when courses or category prop changes

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {allCourses.map((course) => (
        <Card key={course.id} 
          course={course} 
          likedCourses={likedCourses} 
          setlikedCourses={setlikedCourses} />
      ))}
    </div>
  );
};

export default Cards;
