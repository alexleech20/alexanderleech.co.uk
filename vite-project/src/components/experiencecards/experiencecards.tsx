import react from 'react';
import './Experience.css';

interface experienceCardProps {
    duration?: string;
    jobTitleCompany?: string;
    description?: string;
    tags?: string[];
    cardLinkTo?: string;
}

// reusable experience cards
export default function experienceCard({ duration, jobTitleCompany, description, tags, cardLinkTo }: experienceCardProps) {

  return (
    <a href={cardLinkTo} rel="noreferrer" target="_blank" className="experienceCardBackground">
      <ul>
        <li>
          <div className="flex">
            <div className="w-1/4">
              {/* duration section */}
              <h4>{duration}</h4>
            </div>
            <div className="w-3/4">
              {/* experience description section */}
              <div className="pb-5 anchorHoverStyles">
                <h2>{jobTitleCompany}</h2>
              </div>
              <div className="pb-4">
                <p>{description}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <span className="bg-blue-900 bg-success-soft color-red text-md font-medium px-1.5 py-0.5 rounded">
                      AWS
                  </span>
                </div>
                <div className="pl-3">
                  <span className="bg-blue-900 bg-success-soft color-red text-md font-medium px-1.5 py-0.5 rounded">
                    Typescript & Javascript
                  </span>
                </div>
                <div className="pl-3">
                  <span className="bg-blue-900 bg-success-soft color-red text-md font-medium px-1.5 py-0.5 rounded">
                    Drupal
                  </span>
                </div>
                <div className="pl-3">
                  <span className="bg-blue-900 bg-success-soft color-red text-md font-medium px-1.5 py-0.5 rounded">
                    Accessibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </a>
  )
} 