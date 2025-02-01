import { Sidebar } from "./_components/sidebar";
import { RightSidebar } from "./_components/right-sidebar";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4 space-y-4 animate-pulse">
        <div className="h-10 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-48 bg-gray-300 rounded-lg shadow-md relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="h-40 bg-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
