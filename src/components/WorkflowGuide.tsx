import { Play, GitBranch, Bell, Code, CheckCircle } from 'lucide-react'

export const WorkflowGuide = () => {
  const steps = [
    {
      number: '01',
      title: 'Define Trigger',
      description: 'Choose what initiates your workflow',
      options: [
        'Sensor threshold exceeded (e.g., temperature > 80°C)',
        'Time-based schedule (e.g., daily at 9 AM)',
        'Manual trigger by user action',
        'External webhook event'
      ]
    },
    {
      number: '02',
      title: 'Add Condition Nodes',
      description: 'Set up decision logic with branching',
      options: [
        'Compare sensor values against thresholds',
        'Check equipment operational status',
        'Evaluate time windows (business hours vs off-hours)',
        'Multiple condition chaining with AND/OR logic'
      ]
    },
    {
      number: '03',
      title: 'Configure Actions',
      description: 'Define what happens when conditions are met',
      options: [
        'Send email/SMS notifications to maintenance team',
        'Create calendar maintenance task',
        'Update sensor configuration',
        'Trigger external API calls',
        'Generate automated reports'
      ]
    },
    {
      number: '04',
      title: 'Test & Deploy',
      description: 'Validate workflow before production',
      options: [
        'Test mode with sample sensor data',
        'Dry run without executing actions',
        'View execution logs and history',
        'Deploy to production environment'
      ]
    }
  ]

  const nodeTypes = [
    { icon: Play, name: 'Trigger Node', desc: 'Starts the workflow execution', color: 'from-green-900 to-green-700' },
    { icon: GitBranch, name: 'Condition Node', desc: 'Decision logic with branching', color: 'from-blue-900 to-blue-700' },
    { icon: Bell, name: 'Action Node', desc: 'Performs specific actions', color: 'from-purple-900 to-purple-700' },
    { icon: Code, name: 'Transform Node', desc: 'Data manipulation', color: 'from-orange-900 to-orange-700' },
    { icon: CheckCircle, name: 'End Node', desc: 'Workflow completion', color: 'from-red-900 to-red-700' }
  ]

  const exampleWorkflow = {
    title: 'High Temperature Alert with Escalation',
    description: 'Automated workflow that monitors equipment temperature and escalates alerts based on severity',
    nodes: [
      { step: 1, type: 'Trigger', action: 'Temperature sensor exceeds 75°C' },
      { step: 2, type: 'Condition', action: 'Check if temperature > 85°C (critical)' },
      { step: 3, type: 'Action (True)', action: 'Send SMS to on-call engineer + Create urgent ticket' },
      { step: 4, type: 'Action (False)', action: 'Send email to maintenance team + Log warning' },
      { step: 5, type: 'Condition', action: 'Wait 10 minutes and recheck temperature' },
      { step: 6, type: 'Action', action: 'If still high, escalate to manager + Schedule inspection' }
    ]
  }

  return (
    <section id="workflow-guide" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-darkblue-900 relative overflow-x-hidden max-w-full">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkblue-950/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              Workflow Automation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Create Workflows
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our visual workflow builder allows you to automate maintenance tasks without writing code. 
            Drag, drop, and connect nodes to create powerful automation rules.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Building a Workflow in 4 Steps</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-darkblue-900 rounded-xl p-8 border border-primary-900"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.options.map((option, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5"></div>
                          <span className="text-gray-400">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Node Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Available Node Types</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {nodeTypes.map((node, idx) => {
              const Icon = node.icon
              return (
                <div key={idx} className="bg-darkblue-900 rounded-lg p-6 border border-darkblue-700 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${node.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{node.name}</h4>
                  <p className="text-xs text-gray-400">{node.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Example Workflow */}
        <div className="bg-darkblue-900 rounded-xl p-8 border-2 border-primary-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Example Workflow</h3>
            <h4 className="text-xl text-primary-400 font-semibold mb-3">{exampleWorkflow.title}</h4>
            <p className="text-gray-300 max-w-2xl mx-auto">{exampleWorkflow.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {exampleWorkflow.nodes.map((node, idx) => (
                <div 
                  key={idx}
                  className="bg-darkblue-800 rounded-lg p-4 border border-darkblue-700 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-400">{node.step}</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-400 font-semibold mb-1">
                      {node.type}
                    </div>
                    <p className="text-sm text-gray-300">{node.action}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-darkblue-800 rounded-lg p-6 border border-darkblue-700">
              <div className="text-sm uppercase tracking-wider text-primary-400 font-semibold mb-4">
                Workflow Benefits
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-1">Automated Response</div>
                    <p className="text-sm text-gray-300">Immediate action without human intervention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-1">Smart Escalation</div>
                    <p className="text-sm text-gray-300">Severity-based routing to appropriate team members</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-1">Continuous Monitoring</div>
                    <p className="text-sm text-gray-300">Rechecks conditions and adapts response</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-1">Audit Trail</div>
                    <p className="text-sm text-gray-300">Complete execution logs for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
