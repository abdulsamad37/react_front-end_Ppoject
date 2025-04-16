import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const reports = [
  {
    id: 1,
    title: "World Bank - Education Finance Watch 2024",
    description:
      "This report covers the total education spending has increased steadily, however spending per child has either decreased or stagnated",
    image: "https://worldbank.scene7.com/is/image/worldbankprod/bangladesh-students-in-class?wid=780&hei=439&qlt=85,0&resMode=sharp", // Placeholder image, update with actual image if needed
    pdfUrl: "https://documents1.worldbank.org/curated/en/099102824144527868/pdf/P50097819250a00ce1812018168df2deaa3.pdf", // External link to website
  },
  {
    id: 2,
    title: "UNICEF - From Commitments to Action",
    description:
      "Explore UNICEF's work in improving education outcomes for children in the Foundational Learning Action Tracker 2024",
    image: "https://www.unicef.org/sites/default/files/styles/hero_extended/public/UNI592297.webp?itok=JVHDZXXf", // Placeholder image, update with actual image if needed
    pdfUrl: "https://www.unicef.org/media/163606/file/Foundational-learning-action-tracker-2024-global-report.pdf", // External link to website
  },
  {
    id: 3,
    title: "EAA - Education Above All Foundation ",
    description:
      "Education Above All Foundation Humanity will not overcome the immense challenges we face unless we ensure that children get the quality education that equips them to play their part in the modern world.",
    image: "https://www.educationaboveall.org/sites/default/files/styles/rectangle_block/public/research/images/2023-01-23.png?itok=vezTPre3", // Placeholder image, update with actual image if needed
    pdfUrl: "https://www.educationaboveall.org/sites/default/files/research/attachments/EAA_ANNUAL%20REPORT%202023_ENG%20FINAL.pdf", // External link to website
  },
  {
    id: 4,
    title: "UNESCO - GEM Report 2024: Pacific Region",
    description:
      "UNESCO's GEM Report 2024 highlights education challenges and strategies for sustainable development in the Pacific region.",
    image: "https://www.unesco.org/gem-report/sites/default/files/styles/banner_desktop/public/2022-08/31267045810_fbf0da1141_o.jpg.webp?itok=vMbDXoyd", // Placeholder image, update with actual image if needed
    pdfUrl: "https://unesdoc.unesco.org/ark:/48223/pf0000391211/PDF/391211eng.pdf.multi", // External link to website
  },
];

const Reports = () => {
  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the provided URL
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Quality Education Reports</h2>

      <Row>
        {reports.map((report) => (
          <Col key={report.id} xs={12} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={report.image}
                style={{ height: "200px", objectFit: "cover" }}
                alt={report.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{report.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {report.description}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleRedirect(report.pdfUrl)} // Redirect to the URL
                  className="w-100 mt-3"
                >
                  View Report
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reports;
