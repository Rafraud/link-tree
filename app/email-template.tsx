import * as React from 'react';

interface SenderTemplateProps {
  name: string;
  email: string;
}

export function SenderTemplate({ name, email }: SenderTemplateProps) {
  return (
    <div>
      <p>{name} {email}</p>
    </div>
  );
}

interface EmailTemplateProps {
  body: string;
}

export function EmailTemplate({ body }: EmailTemplateProps) {
  return (
    <div>
      <p>{body}</p>
    </div>
  );
}