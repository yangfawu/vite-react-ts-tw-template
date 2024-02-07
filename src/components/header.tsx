const LINKS: {
    name: string
    href: string
}[] = [
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export default function Header() {
    return (
        <header className="bg-slate-300">
            <div className="max-w-screen-xl px-8 py-4 m-auto flex items-center gap-4">
                <div className="flex items-center gap-4 mr-auto">
                    <img
                        src="/vite.svg"
                        alt="Vite Logo"
                        className="w-8 h-8"
                    />
                    <h3 className="text-2xl font-bold">Vite + React</h3>
                </div>
                {LINKS.map(({ name, href }, index) => (
                    <a
                        key={index}
                        href={href}
                        className="text-xl font-semibold underline-1 hover:underline"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </header>
    )
}
