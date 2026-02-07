export default function AuthFooter(){

    return(
        <footer className="py-6 px-6 md:px-12 border-t border-neutral-200 mt-auto h-15">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-neutral-500 mb-4 md:mb-0">© 2026 Gabriel. Todos os direitos reservados.</p>
                <div className="flex gap-4 items-center justify-center text-sm">
                    <a href="" className="text-neutral-500 hover:text-neutral-700 transition-colors">Política de Privacidade</a>

                    <a href="" className="text-neutral-500 hover:text-neutral-700 transition-colors">Termos de Uso</a>
                </div>
            </div>
        </footer>
    )

}