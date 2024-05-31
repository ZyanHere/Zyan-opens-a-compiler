import { codeType } from "@/vite-env";
import { Code } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


export default function CodeItem({
  data,
  
}: {
  data: codeType;
}) {
  return (
    <div className="p-3 rounded cursor-pointer bg-slate-900 flex justify-start items-center flex-col gap-3">
      <div className="__top flex justify-start items-start gap-3 w-full">
        <Code />
        <p className="font-mono font-bold text-lg">{data.title}</p>
      </div>
      <Separator />
      <Link target="_blank" to={`/compiler/${data._id}`}>
          <Button variant="secondary">Open Code</Button>
        </Link>
    </div>
  )
}


