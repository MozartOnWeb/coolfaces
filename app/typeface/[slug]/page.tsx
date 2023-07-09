export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="container">
      <section className="typeface-page">
        <h1 className="typeface-name">Pilowlava</h1>

        <section className="typeface-infos">
          {/* LEFT SIDE */}
          <div className="left">
            <div>
              <h4>Category</h4>
              <p>Display</p>
            </div>
            <div>
              <h4>Styles</h4>
              <p>1 style</p>
            </div>
            <div>
              <h4>License</h4>
              <p>SIL Open Font License, Version 1.1</p>
            </div>
            <div>
              <h4>Infos</h4>
              <p>
                Pilowlava (sic) was born as an intuitive, fast-paced creative
                feedback loop in which its creators tried to surprise one
                another. The result is a typeface that recalls cooled lava flows
                drawn with a compass.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right"></div>
        </section>
      </section>
    </main>
  );
}
