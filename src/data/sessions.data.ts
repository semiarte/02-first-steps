export interface TimetableProps {
    columnId: string;
    headline: string;
    session: Session[];
}

interface Session {
    sessionHeading: string;
    sessionDescription: string;
}

export const sessions: TimetableProps[] = [
    {
        columnId: "1",
        headline: "Main Stage",
        session: [
            {
                sessionHeading: "Opening Keynote: Why Coffee Is Basically a Startup",
                sessionDescription: "How caffeine fuels innovation, questionable decisions, and pitch deck overconfidence.",
            },
            {
                sessionHeading: "The Art of Pretending to Understand Blockchain",
                sessionDescription: "Learn buzzwords, nod convincingly, and raise millions without explaining anything.",
            },
        ]
    },
    {
        columnId: "2",
        headline: "Masterclasses",
        session: [
            {
                sessionHeading: "Masterclass: hos to fix bugs by turning it off and on again",
                sessionDescription: "Advanced reboot strategies, mysterious error disappearance, and ceremonial cable unplugging.",
            },
            {
                sessionHeading: "Pitch deck teardown: slides that spark joy",
                sessionDescription: "Clean up messy presentations, banish Comic Sans, and summon investor enthusiasm.",
            },
        ]
    }
]