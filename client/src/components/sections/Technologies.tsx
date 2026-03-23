import { TECHNOLOGIES } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export function Technologies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            <span className="text-primary">Technologies</span> That Drive Success
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We use the latest frameworks and tools to build future-proof applications.
          </p>
        </div>

        <Tabs defaultValue="Frontend" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 overflow-x-auto pb-4">
            <TabsList className="bg-blue-50/50 p-1 rounded-full">
              {Object.keys(TECHNOLOGIES).map((tech) => (
                <TabsTrigger 
                  key={tech} 
                  value={tech}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-secondary data-[state=active]:text-white"
                >
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(TECHNOLOGIES).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <div className="p-2 bg-gray-50 rounded-lg text-primary">
                      <item.icon size={20} />
                    </div>
                    <span className="font-semibold text-secondary">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
