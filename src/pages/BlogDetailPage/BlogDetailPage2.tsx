import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage2 = () => {
  return (
    <div className={styles.container}>
      <h2>[EDIFICE 2022] ECB-2000 racing suspension, carbon and Bluetooth</h2>
      <img
        src={require("assets/blog/blog2/1.jpg")}
        className={styles.heroImg}
        alt="gwg-2040fr"
      />
      <h4>
        Completely unexpectedly, the Japanese gave out information about the
        novelty ECB-2000, which has all chances to become the flagship of the
        EDIFICE car line. "The most powerful motorsport concept in the history
        of the brand" - so the manufacturer briefly describes its fresh
        creation. We know how Casio does not throw words "to the wind", which
        means the watch subject is entering a new stage of development.
      </h4>
      <h4>
        For the first time in the case of EDIFICE, we see a carbon
        fiber-reinforced case. Carbon has long been used in the impact-resistant
        G-SHOCK line and has managed to prove itself as a lightweight,
        ultra-durable and technologically advanced material. "Now the feeling of
        motorsports and extreme racing will be in the design as well as in the
        materials," is another message from Casio's engineers. Analogous to the
        Carbon Core Guard - here, the electronic module is also protected by a
        carbon layer.
      </h4>
      <h4>
        Look at the carbon "ears" of the bracelet/strap attachment - they are
        made in the form of four large protrusions. Almost like the suspension
        of a racing car. In addition to the obvious design "fit" in the
        direction of motor racing, we see the reinforcement of the strap
        attachment mechanism, where carbon reinforcement plays a crucial role.
        Of course, this adds to the visual massiveness of the case [due to the
        protruding parts], but you need to look at the watch in person to draw
        any conclusions.
      </h4>
      <img
        src={require("assets/blog/blog2/2.jpg")}
        className={styles.heroImg}
        alt="gwg-2040fr package"
      />
      <h4>
        Bluetooth synchronization extends the racing potential of the series,
        where it is important to always be aware of the exact time not only in
        one place, but also anywhere in the world - just select the desired city
        in the app to see the current time in the specified area. A stopwatch
        with a memory for 200 laps can also be used in conjunction with your
        smartphone to quickly transfer data to the app. The Time & Place feature
        captures geo-positioning on the map, time and date.
      </h4>
    </div>
  );
};
