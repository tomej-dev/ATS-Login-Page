export default function AuthResume() {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-black mb-2">
        Otimize seu currículo para ATS
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        O Matchz analisa seu CV e o compara com a descrição da vaga,
        oferecendo insights valiosos e um CV otimizado para sistemas ATS.
      </p>

      <div className="space-y-4">
        {/* Step 1 */}
        <div className="flex gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-medium">
            1
          </div>
          <div>
            <p className="text-sm font-medium text-black">
              Envie seu currículo
            </p>
            <p className="text-xs text-gray-500">
              Faça upload do seu CV atual em formato PDF ou DOCX.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-medium">
            2
          </div>
          <div>
            <p className="text-sm font-medium text-black">
              Adicione a descrição da vaga
            </p>
            <p className="text-xs text-gray-500">
              Cole a descrição da vaga para análise de compatibilidade.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-medium">
            3
          </div>
          <div>
            <p className="text-sm font-medium text-black">
              Receba uma análise detalhada
            </p>
            <p className="text-xs text-gray-500">
              Veja seu score ATS e obtenha seu currículo otimizado para a vaga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
