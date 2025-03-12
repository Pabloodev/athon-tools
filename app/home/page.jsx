"use client";

import Link from "next/link";
import { Minus, X, Square, ArrowRight } from "lucide-react";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center flex flex-wrap gap-8 p-8">
      <Link href="home/ausentes" className="group">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-[350px] h-[350px] bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-slate-600/30 shadow-xl overflow-hidden hover:border-slate-500/50 transition-all duration-300"
        >
          <div className="p-4 bg-zinc-800/80 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-slate-100">Reagendamento Ausentes</h1>
              <div className="flex space-x-3">
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Minus size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Square size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <X size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-slate-300">Relátorio de clientes ausentes de uma forma mais efetiva.</p>
            </div>
            <div className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
              Acessar ferramenta <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>

      <Link href="home/retiradas" className="group">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-[350px] h-[350px] bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-600/30 shadow-xl overflow-hidden hover:border-slate-500/50 transition-all duration-300"
        >
          <div className="p-4 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-slate-100">Reagendamento Retiradas</h1>
              <div className="flex space-x-3">
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Minus size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Square size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <X size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-slate-300">Reagenda as OSs de retiradas que estão na tela alocadas.</p>
            </div>
            <div className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
              Acessar ferramenta <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>

      <Link href="" className="group">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-[350px] h-[350px] bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-600/30 shadow-xl overflow-hidden hover:border-slate-500/50 transition-all duration-300 flex flex-col"
        >
          <div className="p-4 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-slate-100">Em produção</h1>
              <div className="flex space-x-3">
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Minus size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <Square size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
                <div className="hover:bg-slate-700/50 p-1.5 rounded-md transition-colors">
                  <X size={15} className="text-slate-400 hover:text-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-slate-300">Nova ferramenta em desenvolvimento</p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}