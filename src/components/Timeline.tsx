import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function Timeline() {
  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          date="2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
          dateClassName="text-xl"
        >
          <h3 className="vertical-timeline-element-title">
            Mengenal satu sama lain saat masa kuliah di program studi yang sama.
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
          dateClassName="text-xl"
        >
          <h3 className="vertical-timeline-element-title">
            Kemudian kami berdua sepakat untuk berkomitmen pada sebuah hubungan.
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
          dateClassName="text-xl"
        >
          <h3 className="vertical-timeline-element-title">
            Pada bulan November, kedua keluarga kami bertemu untuk merencanakan
            ke jenjang yang lebih serius
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
          dateClassName="text-xl"
        >
          <h3 className="vertical-timeline-element-title">
            Hingga diputuskan akan melangsukan Akad nikah pada 25 Mei 2024.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
