import Link from "next/link";
import a1_mock from "../../public/a1_mock.png";
import a2_mock from "../../public/a2_mock.png";
import a3_mock from "../../public/a3_mock.png";
import a4_mock from "../../public/a4_mock.png";
import a5_mock from "../../public/a5_mock.png";
import a6_mock from "../../public/a6_mock.png";


const Index = () => {

    return <div className="grid grid-cols-3 px-10 m-0 w-screen *:text-white bg-emerald-900 overflow-clip" >
        <Link href={"/11_module_A/A1"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100 rounded-xl">
<img src={a1_mock.src} />
<h1 className="font-bold">Module A1
</h1>
        </Link>
        <Link href={"/11_module_A/A2"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100 rounded-xl">
<img src={a2_mock.src} />
<h1 className="font-bold">Module A2
</h1>
        </Link>
        <Link href={"/11_module_A/A3"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100 rounded-xl">
<img src={a3_mock.src} />
<h1 className="font-bold">Module A3
</h1>
        </Link>
        <Link href={"/11_module_A/A4"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100 rounded-xl">
<img src={a4_mock.src} />
<h1 className="font-bold">Module A4
</h1>
        </Link>
        <Link href={"/11_module_A/A5"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100  rounded-xl">
<img src={a5_mock.src} />
<h1 className="font-bold">Module A5
</h1>
        </Link>

<Link href={"/11_module_A/A6"} className="flex flex-col w-[300px] h-[550px] justify-center items-center gap-3 border border-emerald-100 rounded-xl">
<img src={a6_mock.src} />
<h1 className="font-bold">Module A6
</h1>
        </Link>
    </div>
}
export default Index;