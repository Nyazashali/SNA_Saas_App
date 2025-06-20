import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {cn, getSubjectColor} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}
const CompanionsList = ({title, companions, classNames }: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className="font-bold text-3xl">Recent Session</h2>
      <Table>
  
  <TableHeader>
    <TableRow>
      <TableHead className=" text-lg w-2/3">Lessons</TableHead>
      <TableHead className="text-lg">Subjects</TableHead>
      <TableHead className="text-lg text-right">Duration</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {companions?.map(({id, subject, name, topic, duration}) => (
    
    <TableRow key={id}>
      <TableCell>
        <Link href={`/companions/${id}`}>
        <div className="flex items-center gap-2">
          <div>
            <Image 
            src={`/icons/${subject}.svg`} 
            alt={subject} 
            width={35} 
            height={35} /> 
          </div>

        </div>
        </Link>
        </TableCell>
        </TableRow>

      ))}
  </TableBody>
</Table>
    </article>
    )
  }
export default CompanionsList;
