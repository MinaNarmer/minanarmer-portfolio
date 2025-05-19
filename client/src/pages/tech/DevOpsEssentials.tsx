import TechContentLayout from "@/components/blog/TechContentLayout";
import { useTranslation } from "react-i18next";

export default function DevOpsEssentials() {
  const { t } = useTranslation();
  
  return (
    <TechContentLayout 
      title={t("devOpsEssentials.title", "DevOps Essentials")} 
      description={t("devOpsEssentials.description", "Learn the core principles, practices, and tools for effective DevOps implementation.")}
    >
      <section>
        <h2>{t("devOpsEssentials.understanding.title", "Understanding DevOps")}</h2>
        <p>
          {t("devOpsEssentials.understanding.intro", "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the development lifecycle and provide continuous delivery with high quality. It's built on a culture of collaboration between teams that historically functioned in silos.")}
        </p>
        
        <h3>{t("devOpsEssentials.corePrinciples.title", "Core Principles")}</h3>
        <ul>
          <li><strong>{t("devOpsEssentials.corePrinciples.collaboration", "Collaboration")}</strong> - {t("devOpsEssentials.corePrinciples.collaborationDesc", "Breaking down silos between development and operations")}</li>
          <li><strong>{t("devOpsEssentials.corePrinciples.automation", "Automation")}</strong> - {t("devOpsEssentials.corePrinciples.automationDesc", "Automating repetitive tasks and processes")}</li>
          <li><strong>{t("devOpsEssentials.corePrinciples.ci", "Continuous Integration")}</strong> - {t("devOpsEssentials.corePrinciples.ciDesc", "Frequently merging code changes into a central repository")}</li>
          <li><strong>{t("devOpsEssentials.corePrinciples.cd", "Continuous Delivery")}</strong> - {t("devOpsEssentials.corePrinciples.cdDesc", "Ensuring code can be reliably released at any time")}</li>
          <li><strong>{t("devOpsEssentials.corePrinciples.monitoring", "Monitoring and Feedback")}</strong> - {t("devOpsEssentials.corePrinciples.monitoringDesc", "Collecting metrics to improve processes")}</li>
        </ul>
      </section>
      
      <section className="mt-10">
        <h2>{t("devOpsEssentials.practices.title", "Essential DevOps Practices")}</h2>
        
        <div className="my-6">
          <h3>{t("devOpsEssentials.practices.iac.title", "Infrastructure as Code (IaC)")}</h3>
          <p>{t("devOpsEssentials.practices.iac.description", "Managing infrastructure through code instead of manual processes:")}</p>
          <ul>
            <li>{t("devOpsEssentials.practices.iac.terraform", "Terraform for infrastructure provisioning")}</li>
            <li>{t("devOpsEssentials.practices.iac.ansible", "Ansible for configuration management")}</li>
            <li>{t("devOpsEssentials.practices.iac.cloudformation", "CloudFormation for AWS resources")}</li>
            <li>{t("devOpsEssentials.practices.iac.arm", "ARM templates for Azure resources")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("devOpsEssentials.practices.cicd.title", "Continuous Integration/Continuous Deployment (CI/CD)")}</h3>
          <p>{t("devOpsEssentials.practices.cicd.description", "Automating the integration and deployment of code changes:")}</p>
          <ul>
            <li>{t("devOpsEssentials.practices.cicd.jenkins", "Jenkins for automation server")}</li>
            <li>{t("devOpsEssentials.practices.cicd.github", "GitHub Actions for CI/CD pipelines")}</li>
            <li>{t("devOpsEssentials.practices.cicd.azure", "Azure DevOps for end-to-end DevOps")}</li>
            <li>{t("devOpsEssentials.practices.cicd.gitlab", "GitLab CI for integrated workflows")}</li>
            <li>{t("devOpsEssentials.practices.cicd.circleci", "CircleCI for cloud-based CI/CD")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("devOpsEssentials.practices.containers.title", "Containerization and Orchestration")}</h3>
          <p>{t("devOpsEssentials.practices.containers.description", "Packaging and managing applications consistently across environments:")}</p>
          <ul>
            <li>{t("devOpsEssentials.practices.containers.docker", "Docker for containerization")}</li>
            <li>{t("devOpsEssentials.practices.containers.kubernetes", "Kubernetes for container orchestration")}</li>
            <li>{t("devOpsEssentials.practices.containers.compose", "Docker Compose for multi-container applications")}</li>
            <li>{t("devOpsEssentials.practices.containers.helm", "Helm for Kubernetes package management")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("devOpsEssentials.monitoring.title", "Monitoring and Observability")}</h2>
        <div className="my-6">
          <h3>{t("devOpsEssentials.monitoring.metrics.title", "Key Metrics and Tooling")}</h3>
          <ul>
            <li><strong>{t("devOpsEssentials.monitoring.metrics.prometheus", "Prometheus")}</strong> - {t("devOpsEssentials.monitoring.metrics.prometheusDesc", "Time-series monitoring")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.metrics.grafana", "Grafana")}</strong> - {t("devOpsEssentials.monitoring.metrics.grafanaDesc", "Visualization and dashboards")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.metrics.elk", "ELK Stack")}</strong> - {t("devOpsEssentials.monitoring.metrics.elkDesc", "Elasticsearch, Logstash, Kibana for log management")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.metrics.newrelic", "New Relic")}</strong> - {t("devOpsEssentials.monitoring.metrics.newrelicDesc", "Application performance monitoring")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.metrics.datadog", "Datadog")}</strong> - {t("devOpsEssentials.monitoring.metrics.datadogDesc", "Cloud-scale monitoring")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("devOpsEssentials.monitoring.pillars.title", "Observability Pillars")}</h3>
          <ul>
            <li><strong>{t("devOpsEssentials.monitoring.pillars.logs", "Logs")}</strong> - {t("devOpsEssentials.monitoring.pillars.logsDesc", "Record of events and errors")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.pillars.metrics", "Metrics")}</strong> - {t("devOpsEssentials.monitoring.pillars.metricsDesc", "Numerical measurements")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.pillars.traces", "Traces")}</strong> - {t("devOpsEssentials.monitoring.pillars.tracesDesc", "Following requests through a distributed system")}</li>
            <li><strong>{t("devOpsEssentials.monitoring.pillars.alerts", "Alerts")}</strong> - {t("devOpsEssentials.monitoring.pillars.alertsDesc", "Notifications for critical issues")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("devOpsEssentials.security.title", "Security in DevOps (DevSecOps)")}</h2>
        <p>
          {t("devOpsEssentials.security.intro", "Integrating security practices within the DevOps process:")}
        </p>
        <ul>
          <li><strong>{t("devOpsEssentials.security.shiftLeft", "Shift Left Security")}</strong> - {t("devOpsEssentials.security.shiftLeftDesc", "Implementing security early in development")}</li>
          <li><strong>{t("devOpsEssentials.security.testing", "Automated Security Testing")}</strong> - {t("devOpsEssentials.security.testingDesc", "SAST, DAST, SCA")}</li>
          <li><strong>{t("devOpsEssentials.security.vulnerability", "Vulnerability Management")}</strong> - {t("devOpsEssentials.security.vulnerabilityDesc", "Regular scanning and remediation")}</li>
          <li><strong>{t("devOpsEssentials.security.compliance", "Compliance as Code")}</strong> - {t("devOpsEssentials.security.complianceDesc", "Automating compliance checks")}</li>
          <li><strong>{t("devOpsEssentials.security.secrets", "Secret Management")}</strong> - {t("devOpsEssentials.security.secretsDesc", "Vault, AWS Secrets Manager, Azure Key Vault")}</li>
        </ul>
      </section>
      
      <section className="mt-10">
        <h2>{t("devOpsEssentials.implementation.title", "Implementation Roadmap")}</h2>
        <p>
          {t("devOpsEssentials.implementation.intro", "A phased approach to implementing DevOps in your organization:")}
        </p>
        <ol>
          <li><strong>{t("devOpsEssentials.implementation.assessment", "Assessment:")}</strong> {t("devOpsEssentials.implementation.assessmentDesc", "Evaluate current processes and pain points")}</li>
          <li><strong>{t("devOpsEssentials.implementation.culture", "Culture:")}</strong> {t("devOpsEssentials.implementation.cultureDesc", "Foster collaboration between development and operations")}</li>
          <li><strong>{t("devOpsEssentials.implementation.tooling", "Tooling:")}</strong> {t("devOpsEssentials.implementation.toolingDesc", "Select and implement appropriate tools")}</li>
          <li><strong>{t("devOpsEssentials.implementation.automation", "Automation:")}</strong> {t("devOpsEssentials.implementation.automationDesc", "Start with CI/CD pipelines")}</li>
          <li><strong>{t("devOpsEssentials.implementation.monitoring", "Monitoring:")}</strong> {t("devOpsEssentials.implementation.monitoringDesc", "Implement comprehensive monitoring")}</li>
          <li><strong>{t("devOpsEssentials.implementation.iteration", "Iteration:")}</strong> {t("devOpsEssentials.implementation.iterationDesc", "Continuously improve processes and practices")}</li>
        </ol>
        
        <div className="mt-6 p-4 bg-indigo-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("devOpsEssentials.implementation.certifications.title", "Recommended Certifications:")}</h4>
          <ul>
            <li>{t("devOpsEssentials.implementation.certifications.aws", "AWS Certified DevOps Engineer")}</li>
            <li>{t("devOpsEssentials.implementation.certifications.azure", "Azure DevOps Engineer Expert")}</li>
            <li>{t("devOpsEssentials.implementation.certifications.kubernetes", "Certified Kubernetes Administrator (CKA)")}</li>
            <li>{t("devOpsEssentials.implementation.certifications.docker", "Docker Certified Associate")}</li>
          </ul>
        </div>
      </section>
    </TechContentLayout>
  );
}