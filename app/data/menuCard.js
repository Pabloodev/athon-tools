import { CalendarSync, Bike, Bolt } from 'lucide-react';

export const cardData = [
    {
        title: "Reagendamento Ausentes",
        description: "Relatório de clientes de uma forma mais efetiva.",
        link: "/menu/ausentes",
        icon: CalendarSync
    },
    {
        title: "Reagendamento Retiradas",
        description: "Reagenda automaticamente as OSs de retiradas que estão alocadas na tela.",
        link: "/menu/retiradas",
        icon: Bike
    },
    {
        title: "Acompanhamento SLA",
        description: "Automatiza o processo de acompanhamento da planilha.",
        link: "/menu/sla",
        icon: Bolt
    },
]