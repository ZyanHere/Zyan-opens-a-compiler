import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { updateCurrentLanguage } from "@/redux/slices/compilerSlice";

export default function HelperHeader() {
  const dispatch = useDispatch();
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button variant="success" size="icon">
          {" "}
          Save
        </Button>
        <Button variant="secondary">
          <Share2Icon fontSize={16} /> Share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <Select
          defaultValue="html"
          onValueChange={(value) => dispatch(updateCurrentLanguage(value))}
        >
          <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
