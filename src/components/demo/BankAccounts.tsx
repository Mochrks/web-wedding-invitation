import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from "lucide-react"

interface BankAccount {
    bank: string
    number: string
    holder: string
}

export function BankAccounts() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const accounts: BankAccount[] = [
        { bank: 'BCA', number: '1234567890', holder: 'Irfan' },
        { bank: 'Mandiri', number: '0987654321', holder: 'Rima' },
    ]

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index)
            setTimeout(() => setCopiedIndex(null), 2000)
        })
    }

    return (
        <section className="pb-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {accounts.map((account, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="p-8 border border-primary/5 bg-background shadow-sm hover:border-primary/20 transition-all duration-700"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-serif italic mb-1">{account.bank}</h3>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bank Account</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-light text-muted-foreground mb-1">Account Holder</p>
                                    <p className="font-medium tracking-wide">{account.holder}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-primary/5 pt-6">
                                <p className="text-2xl font-light tracking-[0.1em]">{account.number}</p>
                                <button
                                    onClick={() => copyToClipboard(account.number, index)}
                                    className="p-2 hover:bg-primary/5 rounded-none transition-all duration-300 relative group"
                                >
                                    <AnimatePresence mode="wait">
                                        {copiedIndex === index ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                            >
                                                <Check className="h-4 w-4 text-primary" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                            >
                                                <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {copiedIndex === index ? 'Copied' : 'Copy'}
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
