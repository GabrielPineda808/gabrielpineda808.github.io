import React from 'react';

const Skills: React.FC = () => {
  // Helper function to split description into sentences and render each on a new line
  const renderDescription = (description: string) => {
    // Split by periods and filter out empty strings
    const sentences = description.split('.').filter(sentence => sentence.trim().length > 0);
    
    return sentences.map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence.trim()}.
        {index < sentences.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const technologies = [
    { name: 'Frontend', items: ['JavaScript','React', 'Thymelead', 'HTML5', 'CSS3', 'Tailwind CSS','Bootstrap'] },
    { name: 'Backend', items: ['Java','Spring Boot','Spring Web MVC','Spring JPA', 'Spring Security','MySQL','Python', 'JUnit5', 'PostgreSQL'] },
    { name: 'Analytics', items: ['Pandas', 'NumPy', 'Seaborn', 'MatPlotLib', 'Tableau', 'ETL process'] },
    { name: 'Tools/Concepts', items: ['REST APIs', 'MVC', 'OOP', 'Data Analysis', 'Unit Testing', 'Relational Modeling', 'CRM', 'Git', 'VS Code','IntelliJ IDEA', 'Postman'] }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's what I bring to the table.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((category) => (
              <div key={category.name} className="bg-dark-card border border-dark-border rounded-lg p-6 hover-lift">
                <h4 className="text-lg font-semibold text-accent mb-4">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-text-primary mb-8">
            What I'm <span className="gradient-text">Learning</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Machine Learning','Angular', 'Node.js', 'Express.js', 'Next.js', 'Dimensional Modeling', 'GraphQL'].map((skill) => (
              <div 
                key={skill}
                className="px-6 py-3 bg-dark-card border border-dark-border rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-12">
            Experience <span className="gradient-text">Timeline</span>
          </h3>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { year: '02/2025 - 07/2025', title: 'GPO MIDA Audience Ops Intern (Data Analyst)', company: 'LINKEDIN', description: 'Built Scrub-Hub, a custom QC web app using Python, Pandas, Dash, and SQL that automated final list validation and reduced QA time from hours to ~5 minutes. Streamlined onboarding (cutting ramp-up from 90 to 30 days) and delivered data insights/dashboards that improved targeting and campaign performance.' },
                { year: '08/2024 - 08/2025', title: 'Application Development: Java Backend Engineer Bootcamp', company: 'YearUpUnited', description: 'Completed an intensive program in Java, OOP, Spring Boot, REST API development, and SQL with a focus on backend engineering and applied, project-based learning.' },
                { year: '01/2022 - 01/2023', title: 'Area Manager', company: 'SKYHAWKS Sports Academy', description: 'Directed operations and staff training for 30+ employees, boosting camp capacity by 30% through optimized field layouts. Built strong partnerships with city Parks & Rec departments to secure priority facilities and deliver high-quality sports programs.' }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-left' : 'pl-8 text-left'}`}>
                    <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover-lift">
                      <div className="text-accent font-semibold mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h4>
                      <div className="text-accent/80 font-medium mb-2">{item.company}</div>
                      <p className="text-text-secondary">{renderDescription(item.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Experience Cards - Stacked vertically */}
          <div className="lg:hidden space-y-6">
            {[
              { year: '02/2025 - 07/2025', title: 'GPO MIDA Audience Ops Intern (Data Analyst)', company: 'LINKEDIN', description: 'Built Scrub-Hub, a custom QC web app using Python, Pandas, Dash, and SQL that automated final list validation and reduced QA time from hours to ~5 minutes. Streamlined onboarding (cutting ramp-up from 90 to 30 days) and delivered data insights/dashboards that improved targeting and campaign performance.' },
              { year: '08/2024 - 08/2025', title: 'Application Development: Java Backend Engineer Bootcamp', company: 'YearUpUnited', description: 'Completed an intensive program in Java, OOP, Spring Boot, REST API development, and SQL with a focus on backend engineering and applied, project-based learning.' },
              { year: '01/2022 - 01/2023', title: 'Area Manager', company: 'SKYHAWKS Sports Academy', description: 'Directed operations and staff training for 30+ employees, boosting camp capacity by 30% through optimized field layouts. Built strong partnerships with city Parks & Rec departments to secure priority facilities and deliver high-quality sports programs.' }
            ].map((item, index) => (
              <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6 hover-lift">
                <div className="text-accent font-semibold mb-3 text-sm">{item.year}</div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h4>
                <div className="text-accent/80 font-medium mb-3">{item.company}</div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
