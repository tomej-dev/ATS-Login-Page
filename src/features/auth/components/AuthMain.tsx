import AuthForms from "./AuthForms";
import AuthResume from "./AuthResume";

export default function AuthMain(){

     return (
    <div className="min-h-[calc(100dvh-90px-60px)] bg-[#f6f6f6] flex items-center justify-center">
      <div className="w-full max-w-6xl px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Esquerda */}
          <div className="flex justify-center">
            <AuthForms />
          </div>

          {/* Direita */}
          <div className="hidden md:block">
            <AuthResume />
          </div>

        </div>

      </div>
    </div>
  );

}