import Link from "next/link";

export default function Edit() {
    // 개인 user
    // store user
    return ( <div>
        <h1 className="text-3xl font-bold">
            Edit page
        </h1>
        <Link href="/my">마이페이지로 이동</Link>
    </div>);
}