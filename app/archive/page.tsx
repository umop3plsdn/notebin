"use client";
import { usePathname } from "next/navigation";
import { useNostr } from "nostr-react";
import type { Event, Filter } from "nostr-tools";
import { useEffect, useState } from "react";
import ArchiveNotes from "./ArchiveNotes";

export default function ArchivePage() {
  const pathname = usePathname();
  const POSTS_PER_PAGE = 10;
  const { connectedRelays } = useNostr();
  const [events, setEvents] = useState<Event[]>([]);
  const [numPages, setnumPages] = useState<number>();

  const [filter, setFilter] = useState<Filter>({
    kinds: [2222],
    limit: 100,
  });

  if (pathname) {
    console.log("pathname is:", pathname);
    // page = pathname.split("/").pop() || "1";
  }

  useEffect(() => {
    connectedRelays.forEach((relay) => {
      let sub = relay.sub([filter]);
      let eventArray: Event[] = [];
      sub.on("event", (event: Event) => {
        eventArray.push(event);
      });
      sub.on("eose", () => {
        console.log("EOSE");
        console.log("eventArray", eventArray);
        setEvents(eventArray);
        if (eventArray.length) {
          const length = Math.ceil(eventArray.length / POSTS_PER_PAGE);
          if (length) {
            setnumPages(length);
          }
        }
        console.log("numPages", numPages);
        sub.unsub();
      });
    });
  }, [filter, connectedRelays]);

  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="text-3xl">Note Archive</h1>
      <ArchiveNotes
        postPerPage={POSTS_PER_PAGE}
        events={events}
        numPages={numPages}
        setFilter={setFilter}
      />
    </div>
  );
}
