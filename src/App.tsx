import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, ExternalLink, MessageCircle, MousePointerClick, Target, TrendingUp } from 'lucide-react';
import lucasImg from '@/imagens/lucas.jpg';

const WHATSAPP_NUMBER = "5574999249182"; // Atualizado com o número do usuário
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Lucas,%20gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20sites%20e%20tráfego%20pago.`;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-48 md:pb-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs sm:text-sm font-medium mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Especialista em Conversão
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
          >
            Criação de sites e <span className="text-brand-blue">gestão de tráfego pago</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Estratégias avançadas de design e gestão de tráfego pago focadas exclusivamente em escalar o faturamento do seu negócio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base sm:text-lg group"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900">Projetos de Alta Conversão</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-base sm:text-lg">
              Sites desenvolvidos com foco em usabilidade, velocidade e persuasão.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Almeida e Rocha", category: "Escritório Jurídico", link: "https://amostraadvogadoalmeidaerocha.vercel.app/", img: "https://api.microlink.io/?url=https://amostraadvogadoalmeidaerocha.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Advogado Bordô", category: "Escritório Jurídico", link: "https://amostraadvogadobordo.vercel.app/", img: "https://api.microlink.io/?url=https://amostraadvogadobordo.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Chácara dos Sonhos", category: "Aluguel & Eventos", link: "https://chacaradossonhos.vercel.app/", img: "https://api.microlink.io/?url=https://chacaradossonhos.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Curso Massoterapia", category: "Infoproduto", link: "https://www.cursomassoterapiaonline.com.br/", img: "https://api.microlink.io/?url=https://www.cursomassoterapiaonline.com.br/&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Música de Ninar", category: "Entretenimento", link: "http://musicadeninar.vercel.app/", img: "https://api.microlink.io/?url=http://musicadeninar.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Bahia Prev", category: "Consultoria Previdenciária", link: "https://bahiaprev.com.br", img: "https://api.microlink.io/?url=https://bahiaprev.com.br&screenshot=true&meta=false&embed=screenshot.url" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-brand-blue mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{project.name}</h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-brand-blue transition-colors group/btn"
                  >
                    Ver projeto <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Tráfego que gera <span className="text-brand-blue">resultados reais</span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed">
                Não vendemos apenas cliques, vendemos oportunidades de negócio. Nossas campanhas são otimizadas diariamente para garantir o menor custo por lead e o maior retorno sobre o investimento (ROI).
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, title: "Leads Qualificados", desc: "Atraímos pessoas que realmente querem comprar o seu produto ou serviço." },
                  { icon: TrendingUp, title: "Escala Previsível", desc: "Processos validados para aumentar seu faturamento com segurança." },
                  { icon: BarChart3, title: "Análise de Dados", desc: "Decisões baseadas em métricas, não em achismos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-sm sm:text-base text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">+R$ 2M</div>
                  <div className="text-zinc-400 text-sm">Gerenciados em anúncios</div>
                </div>
                <div className="bg-brand-blue p-6 rounded-2xl text-white">
                  <div className="text-3xl sm:text-4xl font-display font-bold mb-2">-40%</div>
                  <div className="text-white/80 text-sm">Redução média no Custo por Lead (CPL)</div>
                </div>
              </div>
              <div className="space-y-4 sm:mt-8">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">50+</div>
                  <div className="text-zinc-400 text-sm">Negócios escalados</div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">300%</div>
                  <div className="text-zinc-400 text-sm">Aumento médio em conversões</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
            <motion.div 
              {...fadeIn}
              className="w-full max-w-sm md:max-w-none md:w-1/2 relative mx-auto"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 relative z-10">
                <img 
                  src={lucasImg} 
                  alt="Lucas Rodrigues"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-brand-blue/10 rounded-full blur-2xl -z-10" />
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <div className="text-brand-blue font-medium mb-3 md:mb-4">Sobre o Especialista</div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 md:mb-6 text-zinc-900">
                Muito prazer, sou Lucas Rodrigues.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                <p>
                  Sou especialista em criar ecossistemas digitais de alta conversão. Minha missão é simples: transformar cliques em clientes reais para o seu negócio.
                </p>
                <p>
                  Com anos de experiência no mercado digital, percebi que um site bonito não serve para nada se não vender. Por isso, uno <strong>design estratégico</strong> e <strong>gestão de tráfego avançada</strong> para criar máquinas de vendas previsíveis.
                </p>
                <ul className="mt-6 space-y-3 text-left">
                  {[
                    "Especialista em Landing Pages de Alta Conversão",
                    "Gestor de Tráfego (Meta Ads & Google Ads)",
                    "Foco absoluto em ROI e geração de Leads"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start md:items-center gap-3 text-zinc-800 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5 md:mt-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 
            {...fadeIn}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6"
          >
            Pronto para escalar suas vendas?
          </motion.h2>
          <motion.p 
            {...fadeIn}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10"
          >
            Pare de perder dinheiro com sites que não convertem e campanhas que não dão resultado. Vamos montar um plano de ação para o seu negócio hoje.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-blue hover:bg-zinc-50 rounded-lg font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-xl shadow-black/10"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Quero uma consultoria gratuita
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-100">
        <p>© {new Date().getFullYear()} Lucas Rodrigues. Todos os direitos reservados.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
        </span>
      </motion.a>
    </div>
  );
}
