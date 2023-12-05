type DetailedExplanationProps = {
  children: React.ReactNode;
  title?: string;
};

const DetailedExplanation = ({ children, title = 'Detailed Explanation' }: DetailedExplanationProps) => {
  return (
    <details className="detailed-explanation">
      <summary>
        <h4>{title}</h4>
      </summary>
      {children}
    </details>
  );
};

export default DetailedExplanation;
