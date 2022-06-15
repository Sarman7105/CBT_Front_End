import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Option from "./Option";
const ReportDetails = () => {
  const [report, setReport] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log("id", id);
    const getReportById = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/report/${id}`);
        const result = await response.json();
        setReport(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getReportById(id);
  }, [id]);
  return (
    <div className="dashboard">
      <Option />
      <div className="main">
        <h2>{report.title}</h2>
        <div className="candidate-container">
          {Object.keys(report).length
            ? report?.examinee?.map((person) => (
                <div class="candidate">
                  <div>
                    <img src="/avatar2.png" alt="" />
                  </div>
                  <h3 style={{ marginTop: "10px", marginLeft: "5px" }}>
                    Name: {person.name}
                  </h3>
                  <h4 style={{ marginTop: "5px", marginLeft: "5px" }}>
                    Obtained Mark:{person.totalMark}
                  </h4>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
