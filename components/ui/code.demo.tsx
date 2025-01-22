import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern"

function PatternCardDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PatternCard>
        <PatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Real-time AI Feedback
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            Get instant, detailed feedback on your interview responses. Our AI analyzes your answers for content, clarity, and delivery to help you improve with each practice session.
          </p>
        </PatternCardBody>
      </PatternCard>

      <PatternCard>
        <PatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Industry-Specific Questions
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            Practice with questions tailored to your industry and role. From technical interviews to behavioral questions, we've got you covered across all job sectors.
          </p>
        </PatternCardBody>
      </PatternCard>

      <PatternCard>
        <PatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Performance Analytics
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            Track your progress over time with detailed analytics. Identify areas for improvement and watch your interview skills grow with each practice session.
          </p>
        </PatternCardBody>
      </PatternCard>

      <PatternCard>
        <PatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Custom Scenarios
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            Practice with realistic interview scenarios customized to your experience level and career goals. Prepare for any situation you might encounter.
          </p>
        </PatternCardBody>
      </PatternCard>
    </div>
  )
}

export { PatternCardDemo }