import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';

export default function ProjectsPage() {
  
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'Active', startDate: '2023-01-15', manager: 'John Doe' },
    { id: 2, name: 'Project Beta', status: 'Completed', startDate: '2022-09-01', manager: 'Jane Smith' },
    { id: 3, name: 'Project Gamma', status: 'Planning', startDate: '2023-03-10', manager: 'Mike Johnson' },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects Overview</h1>
      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
        <TableHeader className="bg-blue-50 text-black  h-14">
            <TableRow>
            <TableHead className="font-black  text-sm  tracking-wider px-6 py-4">
              <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                ID
              </span>
            </TableHead>
            <TableHead className="font-black  text-sm  tracking-wider px-6 py-4">
              Project Name
            </TableHead>
            <TableHead className="font-black  text-sm  tracking-wider px-6 py-4">
              Status
            </TableHead>
            <TableHead className="font-black  text-sm  tracking-wider px-6 py-4">
              Start Date
            </TableHead>
            <TableHead className="font-black  text-sm  tracking-wider px-6 py-4">
              Manager
            </TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">{project.id}</TableCell>
                <TableCell className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  {project.name}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Active' ? 'bg-green-100 text-green-800' :
                    project.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </TableCell>
                <TableCell>{project.startDate}</TableCell>
                <TableCell className="text-gray-700">{project.manager}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}