import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../global.css";
import Option from "./Option";

const Reports = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    const getAllReports = async () => {
      try {
        const response = await fetch("http://localhost:5000/report");
        const data = await response.json();
        setReports(data.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    getAllReports();
  }, []);
  return (
    <div className="dashboard">
      <Option />
      <div className="reports main">
        <div className="main-inner">
          {reports.map((report) => (
            <Link
              className="report"
              to={`/reportDetails/${report._id}`}
              key={report._id}
            >
              <h3>{report.title}</h3>
              <p>Participant:{report.examinee.length}</p>
              <p>Marks:{report.question.totalMarks}</p>
              <p>Duration:{report.question.duration}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
