import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/content.css"
import Card from "../components/Card";
import TeacherList from "./TeacherList";

const Content = () => {
    return <div className="">
     <ContentHeader/>
     <Card/>
     <TeacherList/>
    </div>;
};

export default Content; 