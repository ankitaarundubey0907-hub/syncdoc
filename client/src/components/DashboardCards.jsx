import { useEffect, useState } from "react";
import API from "../services/api";

function DashboardCards() {
  const [documents, setDocuments] = useState(0);
  const [shared, setShared] = useState(0);
  const [teams, setTeams] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await API.get("/documents");
        const data = response.data?.data || [];

        // Total documents
        setDocuments(data.length);

        // Documents shared with other users
        const sharedDocuments = data.filter(
          (doc) =>
            doc.isPublic === true ||
            (doc.collaborators && doc.collaborators.length > 0)
        );

        setShared(sharedDocuments.length);

        // Unique collaborators
        const collaboratorIds = new Set();

        data.forEach((doc) => {
          if (doc.collaborators) {
            doc.collaborators.forEach((collaborator) => {
              const id =
                collaborator.user?._id ||
                collaborator.user;

              if (id) {
                collaboratorIds.add(id.toString());
              }
            });
          }
        });

        setTeams(collaboratorIds.size);

      } catch (error) {
        console.log("Dashboard error:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Documents",
      value: documents,
    },
    {
      title: "Shared",
      value: shared,
    },
    {
      title: "Teams",
      value: teams,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl p-6"
        >
          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
